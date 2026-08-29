from django.contrib import admin
from .models import Category, food



admin.site.site_header = "Restaurant Menu Admin"
admin.site.site_title = "Restaurant Menu"
admin.site.index_title = "Welcome to Restaurant Menu Admin Panel"



@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)
    ordering = ('name',)
    list_per_page = 10



@admin.register(food)
class FoodAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'category', 'price')
    list_filter = ('category',)
    search_fields = ('name', 'description')
    ordering = ('name',)
    list_per_page = 10

    fieldsets = (
        ("Asosiy ma'lumotlar", {
            'fields': (
                'name',
                'category',
                'description',
                'price',
            )
        }),

        ("Rasm", {
            'fields': ('image',),
            'classes': ('collapse',),
        }),
    )


