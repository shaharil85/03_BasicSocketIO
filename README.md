# Step to do Basic Socket IO

1. Type command : npm init
2. Edit file package.json, don't forget put start amd engines
3. Install express : npm install express --save 
4. Install socket io : npm install socket.io --save
5. Create index.js
6. Create file for heroku : Procfile
7. To test, Run the server: node index.js
8. Go to heroku page, create new app
9. Follow the instruction to deploy this server

# For deployment in shared website:

1. In global, put below command to allow copy the words:
    
    * {
        -webkit-user-select: text;
        
        -moz-user-select: text;
        
        -ms-user-select: text;
        
        user-select: text; 
    }

2. In index.html,  put "." to href:
    <base href="./" />

3. In app-routing.module.ts, put usehash: true to allow when press refresh:

    @NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash:true })
    ],
    exports: [RouterModule]
    })