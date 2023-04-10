import os
from random import randint
# for i in range(300, 400, 3):
for j in range(40):
    d = str(298) + ' days ago'
    with open('file.txt', 'a') as file:
        file.write(d)
    
    os.system('git add .')
    os.system('git commit --date="' + d + '" -m "commit')

os.system('git push')

