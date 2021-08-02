module.exports = async (input) => {
    const damagedFile = [];
    const read = (input, nodeIndex) => {
        return new Promise(resolve => {
            input.read(nodeIndex, file => resolve(file));
        })
    };
    const size = (input, action) => {
        return new Promise(resolve => {
            input.size(size => resolve(size))
        })
    };
    const foreach = (node, size) => {
        const promises = [];
        for (let i = 0; i < size; i++) {
            promises.push(read(node, i));
        }
        return Promise.all(promises).then(promises => {
            const folders = [];
            promises.forEach((file => {
                if (file instanceof Folder) {
                    folders.push(file);
                } else {
                    if (typeof file === 'string' && file !== 'file') {
                        damagedFile.push(file);
                    }
                }
            }));
            return folders;
        });
    }
    const solve = (node) => {
        return size(node)
            .then(size => foreach(node, size))
            .then(folders => {
                return Promise.all(folders.map(folder => {
                    return solve(folder);
                }))
            })
    }
    const result = await solve(input).then(() => damagedFile.sort());
    return result;
}