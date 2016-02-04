from django.conf.urls import patterns, include, url
from django.contrib import admin
from contact_list.views import (home_view,)

urlpatterns = [
    url(r'^$', home_view, name="list_posts"),
]
