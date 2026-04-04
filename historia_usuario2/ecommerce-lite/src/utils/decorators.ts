
export function addUserMetadata(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    const user = args[0];

    const newUser = {
      ...user,
      role: "user",
      createdAt: new Date(Date.now())
    };

    return originalMethod.apply(this, [newUser]);
  };

  return descriptor;
}