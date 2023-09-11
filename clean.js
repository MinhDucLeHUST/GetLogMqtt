const fs = require('fs');
const folder_to_delete = 'C:/Users/Admin/Downloads/tool_listen_GW/tool_listen_GW/log';

fs.readdir(folder_to_delete, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    // Loop through the files and remove them
    files.forEach((file) => {
        const file_to_delete = `${folder_to_delete}/${file}`;
        fs.unlink(file_to_delete, (err) => {
            if (err) {
                console.error(`Error removing file ${file_to_delete}: ${err}`);
            } else {
                console.log(`File ${file_to_delete} has been successfully removed.`);
            }
        });
    });
});