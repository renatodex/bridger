# Bridger

Bridger is meant to be an agnostic DML wrapper (DOM Manipulation Library).
The idea here is that, instead of using jQuery, Prototype, Zazzle, Sizzle, or etc, you use Bridger as your wrapper to provide methods to manipulate DOM.

## How it works?

Bridger is directly attached to your favorite DML, allowing you to focus on the real implementation without having to worry about code refactory generated by changing your DML in the future.

However, it doesnot matter what DML you use, Bridge interface is always the same, allowing you to exchange jQuery to Prototype or ExtJs, without having to change a single line of code.

## But if you have to use jQuery or Prototype, so where its agnostic ta all?

It is Agnostic in the sense of "library-agnostic". If you dont want to use jQuery, Sizzle or any other library, you can implement your own wrapper of Bridger, allowing you to keep your logic to a interoperable interface that comunicate with any library.

## But i will never change my DML, its crazy.

First, you dont know. Second, if you write open source and reusable code, you may know that people using your code may not be able to use jQuery or Prototype, maybe they have their own corporate DML library, and then if you use jQuery in your library, this corporate guy wont be able to use it, because you strangled to roots of your implementation to a single DML.

## Want to contribute?

Talk with me: renatodex@gmail.com
Renato Alves (@renatodex)
