/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { ThemeContext } from "../context/themecontext"
import Avatar from "./Avatar"

const data = [
     {
       "id": 3889,
       "created_by": 3829,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-07-04T10:19:02.000000Z",
       "updated_at": "2024-07-04T10:19:11.000000Z",
       "msg_count": 2,
       "creator": {
         "id": 3829,
         "name": null,
         "email": "182.69.180.192",
         "phone": null,
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-07-04T10:19:02.000000Z",
         "updated_at": "2024-07-04T10:19:02.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Mac",
         "city": "Delhi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3888,
       "created_by": 3828,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-07-04T09:41:23.000000Z",
       "updated_at": "2024-07-04T09:41:51.000000Z",
       "msg_count": 3,
       "creator": {
         "id": 3828,
         "name": "Shone Jogi",
         "email": "asdfaefsdfgqwaeg@beyondexams.orgfasd",
         "phone": "9130907456",
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-07-04T09:41:23.000000Z",
         "updated_at": "2024-07-04T09:41:23.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Mac",
         "city": "Delhi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3621,
       "created_by": 3555,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-06-12T09:46:13.000000Z",
       "updated_at": "2024-07-01T09:38:21.000000Z",
       "msg_count": 163,
       "creator": {
         "id": 3555,
         "name": null,
         "email": "182.69.183.249",
         "phone": null,
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-06-12T09:46:13.000000Z",
         "updated_at": "2024-06-12T09:46:13.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Mac",
         "city": "Delhi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3633,
       "created_by": 3562,
       "org_id": 10,
       "status": "new",
       "lead_score": 0,
       "created_at": "2024-06-30T06:45:55.000000Z",
       "updated_at": "2024-06-30T06:53:18.000000Z",
       "msg_count": 13,
       "creator": {
         "id": 3562,
         "name": "Shone Jogi",
         "email": "shonejogisadfasfdf2000@gmail.com",
         "phone": "9130907456",
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-06-30T06:45:55.000000Z",
         "updated_at": "2024-06-30T06:45:55.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Mac",
         "city": "Delhi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3631,
       "created_by": 3560,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-06-24T08:21:36.000000Z",
       "updated_at": "2024-06-25T06:37:23.000000Z",
       "msg_count": 47,
       "creator": {
         "id": 3560,
         "name": null,
         "email": "152.58.129.173",
         "phone": null,
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-06-24T08:21:36.000000Z",
         "updated_at": "2024-06-24T08:21:36.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Windows",
         "city": "Lucknow",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3615,
       "created_by": 3548,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-05-31T11:13:16.000000Z",
       "updated_at": "2024-06-21T06:31:34.000000Z",
       "msg_count": 8,
       "creator": {
         "id": 3548,
         "name": "Kaushal",
         "email": "kaushal123@gmail.com",
         "phone": "6393100061",
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-05-31T11:09:00.000000Z",
         "updated_at": "2024-05-31T11:12:34.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Windows",
         "city": "Lucknow",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3620,
       "created_by": 3554,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-06-11T07:09:58.000000Z",
       "updated_at": "2024-06-19T11:37:00.000000Z",
       "msg_count": 86,
       "creator": {
         "id": 3554,
         "name": "Shone Jogi",
         "email": "shonejogasdfasfi2000@gmail.com",
         "phone": "9130907456",
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-06-11T07:09:58.000000Z",
         "updated_at": "2024-06-12T06:09:34.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Mac",
         "city": "Delhi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3627,
       "created_by": 3424,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-06-14T11:41:43.000000Z",
       "updated_at": "2024-06-14T13:08:03.000000Z",
       "msg_count": 34,
       "creator": {
         "id": 3424,
         "name": "Kaushal",
         "email": "kaushalnbt@gmail.com",
         "phone": "6393100061",
         "email_verified_at": "2024-01-17T08:55:10.000000Z",
         "password_updated": 1,
         "created_at": "2023-12-29T10:53:46.000000Z",
         "updated_at": "2024-06-14T13:06:44.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Windows",
         "city": "Varanasi",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3448,
       "created_by": 6,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-01-21T21:20:23.000000Z",
       "updated_at": "2024-06-14T12:52:28.000000Z",
       "msg_count": 128,
       "creator": {
         "id": 6,
         "name": "Shone",
         "email": "shonejogi2000@gmail.com",
         "phone": "9130907456",
         "email_verified_at": "2024-02-09T08:26:06.000000Z",
         "password_updated": 0,
         "created_at": "2023-03-23T21:42:20.000000Z",
         "updated_at": "2024-06-14T11:37:24.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Windows",
         "city": "Lucknow",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     },
     {
       "id": 3626,
       "created_by": 3557,
       "org_id": 10,
       "status": "ongoing",
       "lead_score": 0,
       "created_at": "2024-06-14T10:08:48.000000Z",
       "updated_at": "2024-06-14T10:51:07.000000Z",
       "msg_count": 15,
       "creator": {
         "id": 3557,
         "name": "abc",
         "email": "abcd@gmail.com",
         "phone": "3216547855",
         "email_verified_at": null,
         "password_updated": 0,
         "created_at": "2024-06-14T10:08:48.000000Z",
         "updated_at": "2024-06-14T10:08:48.000000Z",
         "device": "desktop",
         "browser": "Chrome",
         "os": "Windows",
         "city": "Lucknow",
         "country": {
           "id": 103,
           "name": "India",
           "code": "IN",
           "phone_code": "91"
         }
       }
     }
   ]

const ChatList = () => {
     const {theme} = useContext(ThemeContext)
     return (
          <div className={`lg:w-1/4 lg:min-w-[400px] overflow-y-auto break:w-full flex flex-col h-[92%] pt-6 ${theme == "dark" ? 'bg-[#212121]':'bg-white'}`}>
               {data.map((chat, index)=>{
                    const firstName  = chat?.creator?.name ? chat.creator.name : chat.creator.country.code
                    return(
                    <div key={index} className="h-[80px] w-full flex justify-between items-center bg-transparent px-4">
                         <Avatar firstName={firstName} />
                         <div className="flex-1 mx-2">
                              <div className={`text-[16px] overflow-hidden font-semibold ${theme === "dark" ? "text-white": "text-black"}`}>
                                   {
                                        chat.creator.name ? chat.creator.name : chat.creator.city
                                   }
                              </div>
                              <div className={`text-[14px] overflow-hidden font-normal ${theme === "dark" ? "text-[#A2A2A2]": "text-[#707579]"}`}>
                                   {
                                        chat.creator.phone ? chat.creator.phone : "Contact info not available"
                                   }
                              </div>
                         </div>
                         <div className="w-20px flex flex-col items-end">
                              <div className={`text-[12px] overflow-hidden font-normal ${theme === "dark" ? "text-[#686C6E]": "text-[#686C87]"}`}>
                                   Jun 11
                              </div>
                              <div className={`text-center h-[25px] w-[25px] flex justify-center items-center font-medium text-[14px] rounded-full 
                                   ${theme === "dark" ? "text-white bg-[#8774E1]": "text-white bg-[#00C73E]"}
                                   `}>
                                   {chat && chat.msg_count}
                              </div>
                         </div>
                    </div>
               )})}
          </div>
     )
}

export default ChatList
