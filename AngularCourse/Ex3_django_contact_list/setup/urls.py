from django.conf.urls import patterns, include, url
from django.contrib import admin
import contact_list

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('contact_list.urls')),
    ]
