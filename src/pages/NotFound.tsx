
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
      <Card className="max-w-md w-full border-blue-200">
        <CardContent className="p-8 text-center">
          <div className="text-6xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-xl font-semibold text-blue-800 mb-2">Page Not Found</h1>
          <p className="text-blue-600 mb-6">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <div className="flex gap-2 justify-center">
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Home className="h-4 w-4 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-blue-200 text-blue-700"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
