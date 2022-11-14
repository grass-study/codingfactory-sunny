import fs from 'fs';
import path from 'path';

const jsDirectory = path.join(process.cwd(), 'pages/posts');

// slug로 리턴해줘야지 아래 문법이 가능
// // postFilePaths is the list of all mdx files inside the POSTS_PATH directory
// const postFilePaths = fs
//   .readdirSync(jsDirectory)
//   // exclude [id].js files
//   .filter((path) => 
//     {
//       const id = path.replace(/\.js$/, '');
//     return id!=='[id]';
// }
//   );

export function getFreePostName() {
    const fileNames = fs.readdirSync(jsDirectory);
    const pathDummies = fileNames.map((fileName)=>{
    const id = fileName.replace(/\.js$/, '');
    // try{
    const fullPath = path.join(jsDirectory, fileName);
    const stats = fs.statSync(fullPath);
    const time = stats.mtime;
    
    return {id, time };
    }
    )
    return pathDummies.sort(({ date: a }, { date: b }) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  
  }