import openpyxl
import sys


if __name__ == '__main__':
     path = "./word.csv"
     xlsx_path = sys.argv[1]
     print(xlsx_path)
     f = open(path)
     lines = [i for i in f.read().split("\n") if i != ""]
     for line in lines:
         word = line.split(",")
     f.close()
     
     
     
     
     wb = openpyxl.load_workbook(xlsx_path)
     sheet = wb.worksheets[0]
     
     # write pronounce & meaning
     for i in range(0, len(lines)):
             sheet["C" + str(i + 2)] = lines[i].split(",")[2]
             # print(lines[i].split(",")[2])
             
             sheet["D" + str(i + 2)] = lines[i].split(",")[3]
     
     
     wb.save(xlsx_path)
     print(xlsx_path,"done")
