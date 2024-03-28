import json
import pickle
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import CropPrediction
# from sklearn.ensemble import RandomForestClassifier

# Load the pre-trained model
with open('RandomForest.pkl', 'rb') as file:
    model = pickle.load(file)

@csrf_exempt
def predict_crop(request):
    if request.method == 'POST':
        data = request.POST
        features = [data['N'], data['P'], data['K'], data['temperature'], data['humidity'], data['ph'], data['rainfall']]
        prediction = model.predict([features])
        return JsonResponse({'prediction': prediction[0]})
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
from django.core.exceptions import ValidationError

@csrf_exempt
def save_prediction(request):
    print(request.body)  # Add this line
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)  # Print the data to the console

        # Extract the data
        N = float(data.get('N'))  # Convert to float
        P = float(data.get('P'))  # Convert to float
        K = float(data.get('K'))  # Convert to float
        temperature = float(data.get('temperature'))  # Convert to float
        humidity = float(data.get('humidity'))  # Convert to float
        ph = float(data.get('ph'))  # Convert to float
        rainfall = float(data.get('rainfall'))  # Convert to float
        prediction = data.get('prediction')

        print(N, P, K, temperature, humidity, ph, rainfall, prediction)  # Print the extracted values

        # Create the CropPrediction instance and check for validation errors
        crop_prediction = CropPrediction(N=N, P=P, K=K, temperature=temperature, humidity=humidity, ph=ph, rainfall=rainfall, prediction=prediction)
        try:
            crop_prediction.full_clean()
        except ValidationError as e:
            print(e)  # Print validation errors
            return JsonResponse({'status': 'error', 'message': str(e)})  # Return error response

        # Save the data to the database and check for database errors
        try:
            crop_prediction.save()
        except Exception as e:
            print(e)  # Print database errors
            return JsonResponse({'status': 'error', 'message': str(e)})  # Return error response

        return JsonResponse({'status': 'success'})

    return JsonResponse({'status': 'error', 'message': 'Invalid request method'})