"use client";

import { useEffect, useState } from "react";
import { Button, Modal } from "@heroui/react";
import { User } from "lucide-react";

const RequestModal = ({ petId }) => {
  const [requests, setRequests] = useState([]);

  // get requests
  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption-request/${petId}`
    )
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, [petId]);

  // approve / reject
//   const handleStatus = async (id, status) => {
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${id}`,
//       {
//         method: "PATCH",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify({ status }),
//       }
//     );

//     const data = await res.json();

//     if (data.modifiedCount > 0) {
//       // update ui instantly
//       const updatedRequests = requests.map((request) =>
//         request._id === id
//           ? { ...request, status }
//           : request
//       );

//       setRequests(updatedRequests);
//     }
//   };

// test
    const handleStatus = async (id, status, petId) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/adoption/${id}`,
            {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                status,
                petId,
            }),
            }
        );

        const data = await res.json();

        if (data.modifiedCount > 0) {
            const updatedRequests = requests.map((request) =>
            request._id === id
                ? { ...request, status }
                : request
            );

            setRequests(updatedRequests);
        }
    };


  return (
    <div>
      <Modal>
        <Button
          variant="outline"
          className="border w-full border-yellow-400 text-yellow-500 hover:bg-yellow-500 hover:text-white font-semibold py-2 rounded-lg transition"
        >
          Requests
        </Button>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[550px]">
              <Modal.CloseTrigger />

              {/* heading */}
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <User className="size-5" />
                </Modal.Icon>

                <Modal.Heading>
                  Adoption Requests
                </Modal.Heading>
              </Modal.Header>

              <Modal.Body>
                {/* no request */}
                {requests.length === 0 ? (
                  <div className="text-center py-10 text-gray-500">
                    No adoption requests found
                  </div>
                ) : (
                  <div className="space-y-4">
                    {requests.map((request) => (
                      <div
                        key={request._id}
                        className="border rounded-xl p-4"
                      >
                        {/* title + status */}
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-bold text-lg">
                                {request.petName}
                            </h2>

                            <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold
                                ${
                                    request.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : request.status === "approved"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-red-100 text-red-700"
                                }`}
                            >
                                {request.status === "pending" && "Pending"}
                                {request.status === "approved" && "Approved"}
                                {request.status === "rejected" && "Rejected"}
                            </span>
                        </div>

                        {/* user info */}
                        <div className="space-y-1 text-sm">
                          <p>
                            <span className="font-semibold">
                              User Name:
                            </span>{" "}
                            {request.userName}
                          </p>

                          <p>
                            <span className="font-semibold">
                              User Email:
                            </span>{" "}
                            {request.userEmail}
                          </p>

                          <p>
                            <span className="font-semibold">
                              Pickup Date:
                            </span>{" "}
                            {request.adoptionDate}
                          </p>
                        </div>

                        {/* buttons / status */}
                        <div className="mt-4">
                          {request.status === "pending" ? (
                            <div className="flex gap-3">
                                <Button
                                    onPress={() =>
                                        handleStatus(
                                        request._id,
                                        "approved",
                                        request.petId
                                        )
                                    }
                                >
                                    Approve
                                </Button>

                                <Button
                                    onPress={() =>
                                        handleStatus(
                                        request._id,
                                        "rejected",
                                        request.petId
                                        )
                                    }
                                    >
                                    Reject
                                </Button>
                            </div>
                          ) : (
                            <div>
                              <span
                                className={`px-3 py-1 rounded-full text-white text-sm ${
                                  request.status ===
                                  "approved"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                }`}
                              >
                                {request.status}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Modal.Body>

              <Modal.Footer>
                <Button
                  slot="close"
                  className="w-full"
                >
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default RequestModal;