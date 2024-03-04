## Usage

```javascript
import { session, local, indexdb } from '@lite-base/storage';

// Example Usage
session.set('username', 'john_doe'); // Set data
session.get('username'); // Retrieve data
session.remove('username'); // Remove data
session.clearAll(); // Clear all session data

local.set('username', 'john_doe', 3600); // Set data with a one-hour expiration
local.get('username'); // Retrieve data
local.remove('username'); // Remove data
local.clearAll(); // Clear all data

//indexdb

const dbWrapper = new indexdb('myDatabase', 'myStore');

const newData = { name: 'John Doe', age: 30 };
dbWrapper.add(newData)
  .then(id => console.log(`Data added with id: ${id}`))
  .catch(error => console.error('Error adding data:', error));

dbWrapper.getAll()
  .then(data => console.log('All data:', data))
  .catch(error => console.error('Error getting data:', error));

const targetId = 1;
dbWrapper.getById(targetId)
  .then(data => console.log(`Data with id ${targetId}:`, data))
  .catch(error => console.error(`Error getting data with id ${targetId}:`, error));

const updateId = 1;
const updatedData = { age: 31 };
dbWrapper.update(updateId, updatedData)
  .then(() => console.log(`Data with id ${updateId} updated successfully`))
  .catch(error => console.error(`Error updating data with id ${updateId}:`, error));

const deleteId = 1;
dbWrapper.remove(deleteId)
  .then(() => console.log(`Data with id ${deleteId} deleted successfully`))
  .catch(error => console.error(`Error deleting data with id ${deleteId}:`, error));

```