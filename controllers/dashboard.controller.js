module.exports = {
  
    viewDashboard: async (req, res)=>{

      res.render("index");
    
    },
    logIn: async (req, res)=>{

      res.render("login");
    
    }
}