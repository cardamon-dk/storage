## Usage

```javascript
import { session, local } from '@lite-base/storage';

// Example Usage
session.set('username', 'john_doe'); // Set data
session.get('username'); // Retrieve data
session.remove('username'); // Remove data
session.clearAll(); // Clear all session data

local.set('username', 'john_doe', 3600); // Set data with a one-hour expiration
local.get('username'); // Retrieve data
local.remove('username'); // Remove data
local.clearAll(); // Clear all data
```