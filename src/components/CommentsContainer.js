import Comment from "./Comment";
import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Yash Gupta",
    text: "Lorem ipsum dolrifdnbcvmcfdjc",
    replies: [],
  },
  {
    name: "Yash Gupta",
    text: "Lorem ipsum dolrifdnbcvmcfdjc",
    replies: [
      {
        name: "Yash Gupta",
        text: "Lorem ipsum dolrifdnbcvmcfdjc",
        replies: [
          {
            name: "Yash Gupta",
            text: "Lorem ipsum dolrifdnbcvmcfdjc",
            replies: [
              {
                name: "Yash Gupta",
                text: "Lorem ipsum dolrifdnbcvmcfdjc",
                replies: [
                  {
                    name: "Yash Gupta",
                    text: "Lorem ipsum dolrifdnbcvmcfdjc",
                    replies: [],
                  },
                ],
              },
              {
                name: "Yash Gupta",
                text: "Lorem ipsum dolrifdnbcvmcfdjc",
                replies: [],
              },
            ],
          },
          {
            name: "Yash Gupta",
            text: "Lorem ipsum dolrifdnbcvmcfdjc",
            replies: [],
          },
          {
            name: "Yash Gupta",
            text: "Lorem ipsum dolrifdnbcvmcfdjc",
            replies: [],
          },
        ],
      },
      {
        name: "Yash Gupta",
        text: "Lorem ipsum dolrifdnbcvmcfdjc",
        replies: [],
      },
      {
        name: "Yash Gupta",
        text: "Lorem ipsum dolrifdnbcvmcfdjc",
        replies: [],
      },
    ],
  },
  {
    name: "Yash Gupta",
    text: "Lorem ipsum dolrifdnbcvmcfdjc",
    replies: [],
  },
  {
    name: "Yash Gupta",
    text: "Lorem ipsum dolrifdnbcvmcfdjc",
    replies: [],
  },
  {
    name: "Yash Gupta",
    text: "Lorem ipsum dolrifdnbcvmcfdjc",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
