# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 11:11:22 2017

@author: ZNevzz
"""

import pandas as pd

##READ FILE

dir_path='../resources/static/csv/'
#filenames=['ASA Registration Test Sample.csv']
filenames=['ASA Registration Test Sample.xlsx']
#df = pd.read_csv(dir_path+filenames[0])
df = pd.read_excel(dir_path+filenames[0],sheetname=1)
#print(df.head())

##DROP UNWANTED COL AND RENAME

df = df.drop(['Is the above number available on WhatsApp ','Timestamp'],1)

print(df.columns)
df.columns=['name','role','std','school','gender','dob','addr','contact','group']


##TO CSV
df.to_csv(dir_path+'ASA-2017.csv',index=False)
