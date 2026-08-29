from django.shortcuts import render, get_object_or_404
from .models import food, Category


def home(request):
    categories = Category.objects.all()
    foods = food.objects.all()

    context = {
        'categories': categories,
        'foods': foods,
    }

    return render(request, 'home.html', context)


def menu(request):
    categories = Category.objects.all()
    foods = food.objects.all()

    category_id = request.GET.get('category')

    if category_id:
        foods = foods.filter(category_id=category_id)

    context = {
        'categories': categories,
        'foods': foods,
    }

    return render(request, 'menu.html', context)


def food_detail(request, pk):
    food_item = get_object_or_404(food, pk=pk)

    context = {
        'food': food_item,
    }

    return render(request, 'food_detail.html', context)