from django.conf.urls import patterns, include, url
from contact_list.views import (home_view, submit_contact, get_user_list)

urlpatterns = [
    url(r'^$', home_view, name="list_posts"),
    url(r'^submit/$', submit_contact, name="submit_contact"),
    url(r'^user_list/$', get_user_list, name="get_user_list"),
]
