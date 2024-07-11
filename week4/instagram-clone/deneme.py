print("HELLO AGAIN .py")
x = 7
y =3.11
print(x + y)

class Person:
  def __init__(mysillyobject, name, age):
    mysillyobject.name = name
    mysillyobject.age = age

  def myfunc(self):
    print("Hello my name is " + self.name)
    print("I am " + str(self.age))

p1 = Person("Batuhan", 26)
p1.myfunc()