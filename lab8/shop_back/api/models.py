from django.db import models

# Create your models here.
"""
create table products(
    id_p INTEGER PRIMARY KEY ,
    name VARCHAR(255),
    price NUMERIC, 
    description VARCHAR(1000),
    count NUMERIC,
    is_active BOOLEAN,
    cat_id INTEGER references category by id_c
)
"""
"""
create table category(
    id_c INTEGER PRIMARY KEY ,
    name VARCHAR(255) 
)
"""
class Category(models.Model):
    name = models.CharField(max_length=255)
    def to_json_category(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)
    description = models.TextField(max_length=1000)
    count = models.IntegerField(default=1000)
    is_active = models.BooleanField(default=False)
    cat_id = models.ForeignKey(Category, on_delete=models.CASCADE)
    def to_json_product(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
            'cat_id_id': self.cat_id_id
        }

# Create your models here.