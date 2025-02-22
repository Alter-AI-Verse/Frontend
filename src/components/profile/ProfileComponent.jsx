import { useCharacterLimit } from "../hooks/CharacterLimit";
import { useImageUpload } from "../hooks/ImageUpload";
import { Label } from "./Label";
import { Input } from "./Input";

import { Check, ImagePlus, X } from "lucide-react";
import { useContext, useId, useState } from "react";
import { Textarea } from "./Textarea";
import { UserDataContext } from "../contexts/user-context";


function ProfileComponent() {
  const { user } = useContext(UserDataContext);
  const id = useId();

  const maxLength = 180;
  const {
    value,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
    initialValue:
      "Hey, I am Margaret, a web developer who loves turning ideas into amazing websites!",
  });

  return (
    <div className="overflow-y-auto p-4">
      <ProfileBg defaultImage="https://originui.com/profile-bg.jpg" />
      <Avatar defaultImage="https://originui.com/avatar-72-01.jpg" />
      <div className="px-6 pb-6 pt-4">
        <form className="space-y-4">
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1 space-y-2">
              <Label htmlFor={`${id}-first-name`}>First name</Label>
              <Input
                id={`${id}-first-name`}
                placeholder="First Name"
                defaultValue={user.fullName.split(" ")[0]}
                type="text"
                required
              />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor={`${id}-last-name`}>Last name</Label>
              <Input
                id={`${id}-last-name`}
                placeholder="Last Name"
                defaultValue={user.fullName.split(" ")[1]}
                type="text"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${id}-username`}>Username</Label>
            <div className="relative">
              <Input
                id={`${id}-username`}
                className="peer pe-9"
                placeholder="Username"
                defaultValue={user.username}
                type="text"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Check
                  size={16}
                  strokeWidth={2}
                  className="text-emerald-500"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>Linkedin</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>Github</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>Facebook</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>Instagram</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>X.com</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2 w-full">
            <Label htmlFor={`${id}-website`}>Website</Label>
            <div className="flex rounded-lg shadow-sm shadow-black/5">
              <Input
                id={`${id}-website`}
                className="-ms-px rounded-s-none shadow-none"
                placeholder="yourwebsite.com"
                defaultValue={user.website}
                type="text"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor={`${id}-bio`}>Biography</Label>
            <Textarea
              id={`${id}-bio`}
              placeholder="Write a few sentences about yourself"
              defaultValue={user.bio}
              maxLength={maxLength}
              onChange={handleChange}
              aria-describedby={`${id}-description`}
            />
            <p
              id={`${id}-description`}
              className="mt-2 text-right text-xs text-muted-foreground"
              role="status"
              aria-live="polite"
            >
              <span className="tabular-nums">{limit - characterCount}</span>{" "}
              characters left
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function ProfileBg({ defaultImage }) {
  const [hideDefault, setHideDefault] = useState(false);
  const {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
  } = useImageUpload();

  const currentImage = previewUrl || (!hideDefault ? defaultImage : null);

  const handleImageRemove = () => {
    handleRemove();
    setHideDefault(true);
  };

  return (
    <div className="h-32">
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-muted">
        {currentImage && (
          <img
            className="h-full w-full object-cover"
            src={currentImage}
            alt={
              previewUrl
                ? "Preview of uploaded image"
                : "Default profile background"
            }
            width={512}
            height={96}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center gap-2">
          <button
            type="button"
            className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
            onClick={handleThumbnailClick}
            aria-label={currentImage ? "Change image" : "Upload image"}
          >
            <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
          </button>
          {currentImage && (
            <button
              type="button"
              className="z-50 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
              onClick={handleImageRemove}
              aria-label="Remove image"
            >
              <X size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept="image/*"
        aria-label="Upload image file"
      />
    </div>
  );
}

function Avatar({ defaultImage }) {
  const { previewUrl, fileInputRef, handleThumbnailClick, handleFileChange } =
    useImageUpload();
  const currentImage = previewUrl || defaultImage;

  return (
    <div className="-mt-10 px-6">
      <div className="relative flex size-20 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-muted shadow-sm shadow-black/10">
        {currentImage && (
          <img
            src={currentImage}
            className="h-full w-full object-cover"
            width={80}
            height={80}
            alt="Profile image"
          />
        )}
        <button
          type="button"
          className="absolute flex size-8 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white outline-offset-2 transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70"
          onClick={handleThumbnailClick}
          aria-label="Change profile picture"
        >
          <ImagePlus size={16} strokeWidth={2} aria-hidden="true" />
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
          aria-label="Upload profile picture"
        />
      </div>
    </div>
  );
}

export { ProfileComponent };
