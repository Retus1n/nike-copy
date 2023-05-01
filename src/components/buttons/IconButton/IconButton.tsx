export interface IconButtonProps extends ReactTagProps<'button'> {
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, ...props }) => (
  <button {...props}>{icon && <span>{icon}</span>}</button>
);
