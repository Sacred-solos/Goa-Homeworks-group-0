def manual_pop(arr,ind=-1):
  new_arr = []
  for i in arr:
    if arr[ind] != i:
      new_arr.append(i)
  print(new_arr)

manual_pop([2,3,4,13,512])