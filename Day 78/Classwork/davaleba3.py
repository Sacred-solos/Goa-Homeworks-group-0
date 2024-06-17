account = {
  "name": "none",
  "password": "none"
}

name_input = input("Enter your name: ")
password_input = input("Enter your password: ")

account["name"] = name_input
account["password"] = password_input

print(account.get("name", "Key not found"))
print(account.get("password", "Key not found"))
print(account.get("mail", "Key not found"))