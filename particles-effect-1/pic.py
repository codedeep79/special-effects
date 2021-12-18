from PIL import Image

img=Image.open('images/6.png')
rows,cols=img.size;

points="["
for row in range(rows):
    for col in range(cols):
        pixel=img.getpixel((row,col));
        if pixel[0]<230 and pixel[1]<230 and pixel[2]<230:
            points+='['+str(row)+','+str(col)+'],'

points+=']'

file=open("js/data.js","w")
file.write(points)

print(points)


