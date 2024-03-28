from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', views.index, name='index'),
    # path('analyze', views.analyze, name='analyze'),
    path('predict/', views.predict_crop, name='predict_crop'),
    path('save_prediction/', views.save_prediction, name='save_prediction'),
    # path('about_us/', views.about_us,name='about_us')
]
