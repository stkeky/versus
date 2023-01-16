import json
import os
from datetime import date, datetime

if __name__ == '__main__':
    db_path = "versus-app/src/db.json"

    user_name = os.getenv("EVENT_USER_LOGIN")
    user_avatar = os.getenv("EVENT_USER_AVATAR")
    title = os.getenv("EVENT_ISSUE_TITLE")
    body = os.getenv("EVENT_ISSUE_BODY")

    title_data = title.split("|")
    game = title_data[0] # TODO 
    supporting = title_data[1]
    comment = body.split("-->")[1].strip() # naive

    with open(db_path, "r") as f:
        data = json.load(f)

        created_at = datetime.now().isoformat()
        today = str(date.today())

        support_obj = {
            "name": user_name,
            "avatar": user_avatar,
            "comment": comment,
            "createdAt": created_at
        }

        existing = next((x for x in data["timeline"] if x["date"] == today), None)

        if existing:
            existing[supporting]["supporters"].append(support_obj)
        else:
            new_one = {
                "date": today,
                "stkeky": {
                    "points": 0,
                    "supporters": []
                },
                "snooze": {
                    "points": 0,
                    "supporters": []
                }
            }

            data["timeline"].append(new_one)
            new_one[supporting]["supporters"].append(support_obj)

    with open(db_path, "w") as f:
        json.dump(data, f, indent=2)
