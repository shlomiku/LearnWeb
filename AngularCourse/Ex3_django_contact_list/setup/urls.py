from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf.urls.static import static
import contact_list

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('contact_list.urls')),
    ]


if settings.DEBUG:
    urlpatterns.append(static(settings.STATIC_URL, document_root=settings.STATIC_ROOT))