module.exports = {
    apps: [
        
        {
            name: "servidor 1",
            script: "source/app.js",
            env:{
                PORT:8080
            },
            args: "--modo PM2"
        
        },

        {
            name: "servidor 2",
            script: "source/app.js",
            env:{
                PORT:8081
            },
            args: "--modo PM2"
        
        },
        {
            name: "servidor 3",
            script: "source/app.js",
            env:{
                PORT:8082
            },
            args: "--modo PM2"
          
        },
        {
            name: "servidor 4",
            script:"source/app.js",
            env:{
                PORT:8083
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "servidor 5",
            script:"source/app.js",
            env:{
                PORT:8084
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "servidor 6",
            script:"source/app.js",
            env:{
                PORT:8085
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },

        {
            name: "servidor 7",
            script:"source/app.js",
            env:{
                PORT:8086
            },
            exec_mode:"cluster",
            args: "--modo PM2",
            node_args: "--harmony"
            
        },
    ]
}