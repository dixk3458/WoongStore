import { getCart, addOrUpdateCart, removeCart } from '../api/firebase';
import { useAuthContext } from '../contexts/AuthContext';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export default function useCart() {
  const queryClient = useQueryClient();
  const { uid } = useAuthContext();

  const cartQuery = useQuery({
    queryKey: ['carts', uid || ''],
    queryFn: () => {
      return getCart(uid);
    },
    enabled: !!uid,
  });

  const addOrUpdateItem = useMutation({
    mutationFn: product => {
      return addOrUpdateCart(uid, product);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(['carts', uid]);
    },
  });

  const removeItem = useMutation({
    mutationFn: productId => {
      return removeCart(uid, productId);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries(['carts', uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}
