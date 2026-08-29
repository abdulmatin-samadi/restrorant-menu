from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('menu/', views.menu, name='menu'),
    path('menu/<int:pk>/', views.food_detail, name='food_detail'),
]