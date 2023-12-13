export default async function handler(req, res) {
  if (req.method == "POST") {
    const result = JSON.parse(req.body);
    result.memberId = 1;

    try {
      const apiResponse = await fetch(
        "https://ba9b-118-32-224-80.ngrok-free.app/community/" +
          result.communityId +
          "/member/" +
          result.memberId,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "69420",
          },
          mode: "cors",
          body: result,
        }
      );
      if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        console.error("API 응답 에러:", errorText);
        return res.status(apiResponse.status).json(errorText);
      }

      res.redirect(302, "/community");
    } catch (error) {
      console.error("서버 오류:", error);
      return res.status(500).json("서버 오류");
    }
  }
}
