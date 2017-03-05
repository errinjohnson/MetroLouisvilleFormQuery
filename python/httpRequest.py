#!/usr/bin/env python

import urllib2
import urllib
import json
import pprint

# Make the HTTP request.
response = urllib2.urlopen('https://louisvilleky.gov/services/toolbox_forms.json?node_title=',
    data_string)
assert response.code == 200

# Use the json module to load CKAN 's response into a dictionary.
response_dict = json.loads(response.read())

# Check the contents of the response.
assert response_dict['success'] is True
result = response_dict['result']
pprint.pprint(result)
