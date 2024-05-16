import prisma from '../client';
import { TapupCards } from '@prisma/client';

/**
 * Create a user
 * @param {String} code
 * @param {Number} userId
 * @returns {Promise<{message: String, card: TapupCards}>}
 */
const activateCard = async (
  code: number,
  userId: number
): Promise<{ message: string; card?: TapupCards }> => {
  const card = (await prisma.tapupCards.findUnique({
    where: {
      code: +code
    }
  })) as TapupCards;

  // No card found
  if (!card) {
    return {
      message: 'No card found with this id'
    };
  }

  // Card is activated
  if (card.isActivated) {
    return {
      message: 'This card has been activated by other user'
    };
  }

  const activated = await prisma.tapupCards.update({
    where: {
      code: +code
    },
    data: {
      isActivated: true,
      userId: userId
    }
  });

  return {
    message: 'Successfully Activated',
    card: activated
  };
};

export default { activateCard };
