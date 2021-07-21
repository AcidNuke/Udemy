using System;
using BaseLibrary.Projects;

namespace MasterclassConsoleApp
{
    internal class Program
    {
        public static void Main(string[] args)
        {
            var helloWorldClass = new HelloWorldClass();

            Console.ReadKey();

            Console.WriteLine("Goodbye");
        }
    }
}