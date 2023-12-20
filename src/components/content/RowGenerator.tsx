import axios from "axios";
import { useEffect, useState } from "react";

interface Status{
    user: string
}

export default function RowGenerator({user}: Status) {
    let [data, setData] = useState(JSON.parse("[]"))

    useEffect(() => {
        axios
          .get("http://192.168.43.97:8080/api/admin/info/u")
          .then((response) => response.data)
          .then((json) => {
            setData(json);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      
    let d
    let emp
    let empList: any[] = []

    for(d of data) {
        if (d.EFlag === 1 && user === "employee") {
           emp = (<>
            <tr>
                <td>
                    {d.National_ID}
                </td>
                <td>
                    {d.EID}
                </td>
                <td>
                     {d.FName.concat(", ", d.LName)}
                </td>
                <td>
                    {d.Phone}
                </td>
                <td>
                    {d.Address}
                </td>
                <td>
                    <button className="btn btn-sm btn-warning me-2">
                    <img src="/images/edit-text.png" style={{width: "16px", height: "16px"}}/>
                    </button>

                    <button className="btn btn-sm btn-danger ">
                    <img src="/images/x-mark.png" style={{width: "16px", height: "16px"}}/>
                    </button>
                    
                </td>
            </tr>
            </>)
            empList.push(emp)
        }

        else if (d.DFlag === 1 && user === "donor") {
            emp = (<>
             <tr>
                 <td>
                     {d.National_ID}
                 </td>
                 <td>
                     {d.Last_DDate}
                 </td>
                 <td>
                      {d.FName.concat(", ", d.LName)}
                 </td>
                 <td>
                    {d.Phone}
                 </td>
                 <td>
                     {d.Blood_Group.concat(d.Rh_Factor)}
                 </td>
                 <td>
                     {d.Gender}
                 </td>
                 <td>
                 <button className="btn btn-sm btn-light me-2">
                    <img src="/images/medical-report.png" alt="lo" style={{width: "16px", height: "16px"}}/>
                    </button>
                     <button className="btn btn-sm btn-warning me-2">
                     <img src="/images/edit-text.png" style={{width: "16px", height: "16px"}}/>
                     </button>
 
                     <button className="btn btn-sm btn-danger ">
                     <img src="/images/x-mark.png" style={{width: "16px", height: "16px"}}/>
                     </button>
                     
                 </td>
             </tr>
             </>)
             empList.push(emp)
         }
        
         else if (d.RFlag === 1 && user === "recipent") {
            emp = (<>
             <tr>
                 <td>
                     {d.National_ID}
                 </td>
                 <td>
                     {d.E_mail}
                 </td>
                 <td>
                      {d.FName.concat(", ", d.LName)}
                 </td>
                 <td>
                    {d.Phone}
                 </td>
                 <td>
                     {d.Blood_Group.concat(d.Rh_Factor)}
                 </td>
                 <td>
                     {d.Gender}
                 </td>
                 <td>
                 <button className="btn btn-sm btn-light me-2" id={d.National_ID}>
                    <img src="/images/medical-report.png" alt="lo" style={{width: "16px", height: "16px"}}/>
                    </button>
                     <button className="btn btn-sm btn-warning me-2" id={d.National_ID}>
                     <img src="/images/edit-text.png" style={{width: "16px", height: "16px"}}/>
                     </button>
 
                     <button className="btn btn-sm btn-danger" id={d.National_ID}>
                     <img src="/images/x-mark.png" style={{width: "16px", height: "16px"}}/>
                     </button>
                     
                 </td>
             </tr>
             </>)
             empList.push(emp)
         }

    }
    
    return [empList]
       

}