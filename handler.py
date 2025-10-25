with open("cars.txt", "w") as file:
    file.write("Nothing new here!")

with open("cars.txt", "a") as file:
    file.write("\nToyota Corolla")
    file.write("\nHonda Civiv")
    file.write("\nSubaru Miata")

with open("cars.txt", "r") as file:
    print(file.readline())
    print(file.readline())
    print(file.readline())
    print(file.readline())