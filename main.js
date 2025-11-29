/* Please Run This In [dao3.fun] */

let size = 256; /* input map size */
let upper_height = 128; /* input upper height limit */

/* ↓ Copy terrain data from Python script ↓ */
let terrain = [];
async function building() {
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (!terrain[i][j]) continue;
            for (let k = 0; k < terrain[i][j] - 1; k++) {
                if (k == upper_height || k == terrain[i][j]-2) {
                    voxels.setVoxel(i, k - 1, j, 'grass');
                }
                else voxels.setVoxel(i, k - 1, j, 'dirt');
            }
            await sleep(1);
        }
        console.log('x = ' + i + ' is done');
    }
    console.log('function building() executed successfully!');
}
/* RUN THIS FUNCTION! */
building();
