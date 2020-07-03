import pandas as pd
import os

# Simple, possible memory probs with sufficient bytes
with open('collated.txt', 'w') as f:
  for dirEnt in [e for e in os.listdir(os.getcwd()) if e.endswith(".txt") and not e.startswith(".")]:
    with open(dirEnt, 'r') as d:
      for l in d.readlines():
        f.write(l + "\n")


# Or with very large individual files, use pandas:
def collate(*args):
  collated = pd.DataFrame()
  for file in args:
    chunked = pd.read_csv(file, "\n", chunksize=10000)
    chunks = [c for c in chunked]
    df = pd.concat(chunks)
    collated.append(df)
  return collated