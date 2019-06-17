import sqlite3
import pandas as pd
import config

url = config.dburl
# load data
df = pd.read_csv('loving.csv')

# strip whitespace from headers
df.columns = df.columns.str.strip()

df.dropna()

#import mysql.connector
from sqlalchemy import create_engine

engine = create_engine(url, echo=False)
df.to_sql(name='table2', con=engine, if_exists = 'append', index=False)
