# -*- coding: utf-8 -*-
"""
Created on Fri Jun 23 13:47:11 2017

@author: ZNevzz
"""

import pandas as pd


##CREATE DICT



##READ FILE

dir_path='../resources/static/csv/'
filenames=['ASA-2017.csv']
df = pd.read_csv(dir_path+filenames[0],index_col='name') 

##LIST OF OBJECTS
records=list()

##WRITE OUT

for i,r in df.iterrows():
    record={'name':'','role':'','school':'gender','dob':'','addr':'','contact':'','group':''}

    record['name']=str(i)
    record['role']=str(r.role)
    record['school']=str(r.school)
    record['gender']=str(r.gender)
    record['dob']=str(r.dob)    
    record['addr']=str(r.addr)
    record['contact']=str(r.contact)
    record['group']=str(r.group)
    records.append(record)



with open(dir_path[:-4]+'json/'+'ASA-2017.json','w') as out:
    
    #print(str(records))
    out.write(str(records))
    out.close
    
    
