# account = {
#   "full_name": "nikolozi popkhadze",
#   "mail": "nikaniknin@gmail.com",
#   "password": "iamsacred"
# }

# for key,value in account.items():
#   print([key,value])


def manual_items(dict):
  for key, value in dict:
    print(key,value)


manual_items({"a":1,"b":2})