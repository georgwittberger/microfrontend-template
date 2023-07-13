/**
 * Function mounting a microfrontend.
 *
 * @param container DOM element where microfrontend is mounted.
 * @param initialProps Initial props to be passed to microfrontend.
 * @returns Optional update and unmount functions.
 */
export type MountFunction<Props> = (
  container: Element | DocumentFragment,
  initialProps: Props
) => MountFunctionResult<Props> | void;

/**
 * Result of mount function.
 */
export interface MountFunctionResult<Props> {
  /**
   * Update microfrontend with given props.
   *
   * @param props Props to be passed to microfrontend.
   */
  update?: (props: Props) => void;
  /**
   * Unmount microfrontend.
   */
  unmount?: () => void;
}
