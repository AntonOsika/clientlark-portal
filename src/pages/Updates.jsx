import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Updates = () => {
  const [updates, setUpdates] = useState([
    { id: 1, content: "New feature release: Invoice scheduling", date: "2023-03-01" },
    { id: 2, content: "Maintenance scheduled for this weekend", date: "2023-02-28" },
    { id: 3, content: "Customer satisfaction survey results", date: "2023-02-25" },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Updates</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Post New Update</h2>
        <Textarea placeholder="Type your update here..." className="mb-2" />
        <Button>Post Update</Button>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Recent Updates</h2>
        {updates.map((update) => (
          <Card key={update.id} className="mb-4">
            <CardHeader>
              <CardTitle>{update.date}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{update.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Updates;
