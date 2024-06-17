# #1. Merge Lists: Write a function to merge two lists into a single list without any duplicates. For example, merging [1, 2, 3] and [3, 4, 5] should result in [1, 2, 3, 4, 5].


def merging(arr, arr2):
  new_arr = []
  arr.extend(arr2)
  print(list(set(arr)))

merging([1,2,3,4],[4,5,6,7])


# 2. List Comprehension: Create a list comprehension that squares each element of a given list. For instance, if the input list is [1, 2, 3, 4, 5], the output should be [1, 4, 9, 16, 25].

def comprehension(arr):
  myarr = []
  for i in arr:
    myarr.append(i ** 2)
  print(myarr)

comprehension([1,2,3,4,5])

# 3. Filter Odd Numbers: Write a function that takes a list of integers as input and returns a new list containing only the odd numbers from the original list.

def odd_nums(arr):
  newarr = []
  for i in arr:
    if i % 2 == 1:
      newarr.append(i)
  print(newarr)

odd_nums([1,2,3,4,5,6])

# 4. Find Common Elements: Implement a function that takes two lists as input and returns a list containing the common elements between them

def common(arr1,arr2):
  newarr = []
  for i in arr1:
    if i in arr2:
      newarr.append(i)
  print(newarr)

common([1,2,3,4],[2,3,4,5])

# 5. List Manipulation: Write a function to remove the duplicates from a given list while preserving the original order of elements. For example, if the input list is [1, 2, 3, 2, 4, 1], the output should be [1, 2, 3, 4]

def manip(arr):
  newarr = []
  for i in arr:
    newarr.append(i)
  print(list(set(newarr)))

manip([1, 2, 3, 2, 4, 1])

# 6. Merge Dictionaries: Write a function to merge two dictionaries into a single dictionary. If there are overlapping keys, prioritize the values from the second dictionary. For example, merging {'a': 1, 'b': 2} and {'b': 3, 'c': 4} should result in {'a': 1, 'b': 3, 'c': 4}

#1
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict3 = dict1 | dict2
print(dict3)

#2
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict1.update(dict2)
print(dict1)

#3
dict1 = {"a": 1, "b": 2}
dict2 = {"b": 3, "c": 4}
dict3 = {**dict1,**dict2}
print(dict3)


# 7. Dictionary Comprehension: Create a dictionary comprehension that squares each value of a given dictionary. For instance, if the input dictionary is {'a': 1, 'b': 2, 'c': 3}, the output should be {'a': 1, 'b': 4, 'c': 9}
dict ={'a': 1, 'b': 2, 'c': 3}
def comprehension(arr):
  myarr = []
  for i in arr:
    myarr.append(i ** 2)
  print(myarr)

comprehension([1,2,3,4,5]) #?????

