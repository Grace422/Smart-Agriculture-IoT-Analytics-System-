import pandas as pd
from sklearn.tree import DecisionTreeClassifier
import joblib

# Load dataset
data = pd.read_csv("smart_agriculture_dataset.csv")

# Remove missing values
data = data.dropna()

data = pd.get_dummies(data)

# Features & target
X = data.drop(columns=["irrigation_needed"])
y = data["irrigation_needed"]

# Train model
model = DecisionTreeClassifier()
model.fit(X, y)

# Save model
joblib.dump(model, "model.pkl")

print("Model trained successfully!")