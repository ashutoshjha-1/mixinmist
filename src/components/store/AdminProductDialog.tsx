import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface AdminProductDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (productData: {
    name: string;
    price: number;
    description: string;
    image_url: string;
  }) => void;
  product?: {
    id: string;
    name: string;
    price: number;
    description?: string;
    image_url: string;
  } | null;
}

export const AdminProductDialog = ({
  isOpen,
  onClose,
  onSave,
  product,
}: AdminProductDialogProps) => {
  const [name, setName] = React.useState(product?.name || "");
  const [price, setPrice] = React.useState(product?.price?.toString() || "");
  const [description, setDescription] = React.useState(product?.description || "");
  const [imageUrl, setImageUrl] = React.useState(product?.image_url || "");
  const { toast } = useToast();

  React.useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price.toString());
      setDescription(product.description || "");
      setImageUrl(product.image_url);
    } else {
      setName("");
      setPrice("");
      setDescription("");
      setImageUrl("");
    }
  }, [product]);

  const handleSave = () => {
    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice)) {
      toast({
        title: "Invalid Price",
        description: "Please enter a valid price",
        variant: "destructive",
      });
      return;
    }

    if (!name || !imageUrl) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    onSave({
      name,
      price: parsedPrice,
      description,
      image_url: imageUrl,
    });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {product ? "Edit Product" : "Add New Product"}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="py-4">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Product Name*
              </label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter product name"
              />
            </div>
            <div>
              <label htmlFor="price" className="block text-sm font-medium mb-1">
                Price* ($)
              </label>
              <Input
                id="price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter price"
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-1">
                Description
              </label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                rows={3}
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium mb-1">
                Image URL*
              </label>
              <Input
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
              />
            </div>
          </div>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Cancel</AlertDialogCancel>
          <Button onClick={handleSave}>Save</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};