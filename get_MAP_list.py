from PIL import Image
from pyperclip import copy
from time import sleep

map = Image.open('Python开发\地形编辑器\map.png')
size = 256    # Your map size(X axis or Z axis) input here(positive integer)
ground = 5    # Your map Ground thickness(Y axis) input here(positive integer)
scale = 4     # Your map Scale input here(positive integer)
smooth = True # Your map Smoothness input here(positive integer)
voxel = []

for i in range(size):
    voxel.append([])
    for j in range(size):
        voxel[i].append(int((map.getpixel((i,j))[0]+1)/scale) + ground) # voxel[i][j] = height
    sleep(0.001)  # Preventing program from crashing due to high CPU usage

copy(voxel)
print("Copied to clipboard successfully!")