import "./RadioButtons.css";

const RadioButtons = () => {
  
     return (
        <>
          
                  <div className="radio">
                    <label>
                      <input type="radio" value="option1" />
                      Option 1
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option2" />
                      Option 2
                    </label>
                  </div>
                  <div className="radio">
                    <label>
                      <input type="radio" value="option3" />
                      Option 3
                    </label>
                  </div>
                  <button  type="submit">Save</button>
      </>
    )
};

export default RadioButtons;
